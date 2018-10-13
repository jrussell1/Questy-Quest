module.exports = function (sequelize, DataTypes) {
    var State = sequelize.define("State", {

          Room1: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          Room2: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          Room3: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          fightRoom1: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          fightRoom2: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          hasTorch: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          hasDagger: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          hasDust: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          }

    
    });

    return State;
};
