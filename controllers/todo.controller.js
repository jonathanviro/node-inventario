import { todoModel } from "../models/todo.model.js";

const getAll = async (_, res) => {
    try {
        const response = await todoModel.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const todoController = {
    getAll,
}