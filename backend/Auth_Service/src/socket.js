const socketIo = require('socket.io');
const { User, Captain } = require('./models'); // Import specific models

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);


        socket.on('join', async (data) => {
            console.log("Received join event data:", data); // Debugging log
        
            const { userId, userType } = data;
        
            if (!userId) {
                console.error("Error: userId is undefined in join event.");
                return;
            }
        
            try {
                if (userType === 'user') {
                    await User.update({ socketId: socket.id }, { where: { id: userId } });
                } else if (userType === 'captain') {
                    await Captain.update({ socketId: socket.id }, { where: { id: userId } });
                }
            } catch (error) {
                console.error("Error updating socket ID:", error);
            }
        });


        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await Captain.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {

console.log(messageObject);

    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };