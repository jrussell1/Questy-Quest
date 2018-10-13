module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define("Items", {

        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
         
          },
        itemDescription: {
            type: DataTypes.STRING,
          },
        itemEffect: DataTypes.STRING ,
        itemStats:{
            type: DataTypes.INTEGER,
            allowNull: false,
          }


    });




    return Items;
};
