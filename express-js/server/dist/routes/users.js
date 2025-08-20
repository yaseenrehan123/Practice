import express from "express";
import usersList from "../usersList.js";
const userRouter = express.Router();
userRouter.param("id", ((req, res, next, id) => {
    const user = usersList.find((user) => user.id === Number(id));
    if (!user) {
        return res.status(404).send("User not found!");
    }
    req.user = user;
    next();
}));
userRouter.get('/', (req, res) => {
    res.send('User list');
});
userRouter.get('/new', (req, res) => {
    res.send('User new form');
});
userRouter.route('/:id')
    .get((req, res) => {
    res.send(`Get user with id: ${req.params.id}`);
    console.log("USER: ", req.user);
})
    .put((req, res) => {
    res.send(`Update user with id: ${req.params.id}`);
})
    .delete((req, res) => {
    res.send(`Delete user with id: ${req.params.id}`);
});
export default userRouter;
//# sourceMappingURL=users.js.map