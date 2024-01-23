import {pool} from "../database/connection.js";

const findAll = async() => {
    const {rows} = await pool.query("SELECT * FROM inventarios");
    return rows;
};

export const todoModel = {
    findAll,
};