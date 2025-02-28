const { Captain, Role } = require('../models/index');
const ValidationError = require('../utils/validation-error');

class CaptainRepository {

    async create(data) {
        try {
            const captain = await Captain.create(data);
            return captain;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destroy(userId) {
        try {
            await Captain.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await Captain.findByPk(userId, {
                attributes: ['email', 'id','firstname','lastname','v_color','v_plate','v_capacity','v_model'],
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await Captain.findOne({where: {
                email: userEmail
            }});
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

}

module.exports = CaptainRepository;