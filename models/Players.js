module.exports = function (sequelize, DataTypes) {
    var Players = sequelize.define("Players", {

        playerName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        playerAttack: {
            type: DataTypes.INTEGER,
            allowNull: false,
        
          },
        playerHp: {
            type: DataTypes.INTEGER,
            allowNull: false,
          
          },

        playerType: {

          type: DataTypes.STRING,
          allowNull: false,

        }
    
    });

    return Players;
};
