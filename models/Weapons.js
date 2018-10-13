module.exports = function (sequelize, DataTypes) {
    var Weapons = sequelize.define("Weapons", {

        weaponName: {
            type: DataTypes.STRING,
            allowNull: false,
        
          },
        weaponDescription: {
            type: DataTypes.TEXT,
         
          },
        weaponEffect: DataTypes.STRING ,
        weaponStats:{
            type: DataTypes.INTEGER,
            allowNull: false,
         
          }


    });

    return Weapons;
};
