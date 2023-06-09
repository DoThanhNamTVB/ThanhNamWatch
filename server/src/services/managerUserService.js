const db = require("../models/index");

const getAllUseService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findAll(
                { order: [["createdAt", "DESC"]] },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all users",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getAnUseService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { id: id },
                include: [
                    {
                        model: db.Product,
                        as: "Product_Favourites",

                        include: [{ model: db.Color }, { model: db.Category }],
                    },
                    // { model: db.Product, as: "Carts" },
                ],
            });
            resolve({
                err: response ? 0 : 2,
                msg: response ? "Get user is ok" : "Not found user!",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const updateInfoUser = (payload, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.update(payload, {
                where: { id: id },
            });
            resolve({
                err: response ? 0 : 2,
                msg: response
                    ? "Updated status is successfull"
                    : "Update status fail !",
            });
        } catch (error) {
            reject(error);
        }
    });
};

const updateStatusUserService = (status, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.update(
                { status },
                { where: { id: id } }
            );
            resolve({
                err: response ? 0 : 2,
                msg: response
                    ? "Updated status is successfull"
                    : "Update status fail !",
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllUseService,
    getAnUseService,
    updateInfoUser,
    updateStatusUserService,
};
