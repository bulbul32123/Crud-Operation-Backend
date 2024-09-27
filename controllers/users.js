const { USERS } = require('../models/user');


// async function handleAddUsers(req, res) {
//     try {
//         const { name, age, email } = req.body;

//         // Check if the user already exists
//         const existingUser = await USERS.findOne({ email });

//         if (existingUser) {
//             // User already exists, send a response with an error message
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // If user does not exist, create a new user
//         await USERS.create({ name, age, email });

//         return res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Internal Server Error' });
//     }
// }




// async function handleDeleteUser(req, res) {
//     const { userId } = req.params;

//     try {
//         // Find user by ID and delete
//         const deletedUser = await USERS.findByIdAndDelete(userId);

//         if (!deletedUser) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.status(200).json({ message: 'User deleted successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to delete user' });
//     }
// }


async function handleAddUsers(req, res) {
    const { email, age, name } = req.body
    console.log(req.body);
    try {
        const existed = await USERS.findOne({ email })
        if (existed) {
            return res.status(400).json({ message: 'User Already Existed!' })
        }
        await USERS.create({ email, age, name })
        return res.status(200).json({ message: 'User successfully Added 😄' })
    } catch (error) {
        console.log('Error is: ' + error);
        return res.status(500).json({ message: 'Internal Failed!' })
    }
}
async function handleUpdateUser(req, res) {
    const { email, age, name } = req.body;
    const { userId } = req.params;

    try {
        const existed = await USERS.findOneAndUpdate(
            { _id: userId },
            { $set: { email, name, age } },
            { new: true }
        );

        if (!existed) {
            return res.status(400).json({ message: 'User Not Found' });
        }

        return res.status(200).json({ message: 'User successfully Updated 😄' });
    } catch (error) {
        console.log('Error is: ' + error);
        return res.status(500).json({ message: 'Internal Failed!' });
    }
}

async function handleRemoveUser(req, res) {
    const userId = req.params.userId
    try {
        const userDelete = await USERS.findOneAndDelete(userId)
        if (!userDelete) {
            return res.status(400).json({ message: 'User Not Found!' })
        }
        return res.status(200).json({ message: 'User successfully delete!' })
    } catch (error) {
        console.log((error));
        return res.status(500).json({ message: 'Internal Error!' })
    }
}

module.exports = { handleAddUsers, handleRemoveUser, handleUpdateUser };