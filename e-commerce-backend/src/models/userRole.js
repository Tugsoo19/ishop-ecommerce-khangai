const mongoose = require("mongoose")

const UserRoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter the Role Name"],
    }

});

const UserRole = mongoose.model("UserRole", UserRoleSchema);

module.exports = UserRole;