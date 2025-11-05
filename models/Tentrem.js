module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define('hotel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
      allowNull: false
    },
    Tipe_Kamar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Kapasitas_Tamu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Tipe_Kamar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Lantai: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Fasilitas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tanggal_Pesan: {
      type: DataTypes.timestamps,
      allowNull: false
    }
  }, {
    tableName: 'Komik',
    freezeTableName: true,
    timestamps: true
  });
    return Komik;
};