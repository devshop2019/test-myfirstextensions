serial.redirectToUSB()
serial.writeNumber(MKLModules.scan_I2C_Driver_Address())
serial.writeLine("Read I2C motor ")
serial.writeLine(convertToText(pins.i2cReadNumber(64, NumberFormat.Int8LE, false)))
serial.writeLine("Read I2C motor done")
basic.showNumber(MKLModules.Set_MKL_I2C_MotorDriver(
MKL_DRIVER_I2C_MOTOR_INDEX.MKL_DRIVER_I2C_MOTOR_INDEX_1,
MKL_DRIVER_I2C_MOTOR_DC_INDEX.MA,
MKL_DRIVER_I2C_MOTOR_DC_DIR_INDEX.forward,
100
))
basic.pause(2000)
basic.showNumber(MKLModules.Set_MKL_I2C_MotorDriver(
MKL_DRIVER_I2C_MOTOR_INDEX.MKL_DRIVER_I2C_MOTOR_INDEX_1,
MKL_DRIVER_I2C_MOTOR_DC_INDEX.MA,
MKL_DRIVER_I2C_MOTOR_DC_DIR_INDEX.forward,
0
))
basic.pause(2000)
basic.showNumber(MKLModules.Set_MKL_I2C_MotorDriver(
MKL_DRIVER_I2C_MOTOR_INDEX.MKL_DRIVER_I2C_MOTOR_INDEX_1,
MKL_DRIVER_I2C_MOTOR_DC_INDEX.MA,
MKL_DRIVER_I2C_MOTOR_DC_DIR_INDEX.backward,
100
))
basic.pause(2000)
basic.showNumber(MKLModules.Set_MKL_I2C_MotorDriver(
MKL_DRIVER_I2C_MOTOR_INDEX.MKL_DRIVER_I2C_MOTOR_INDEX_1,
MKL_DRIVER_I2C_MOTOR_DC_INDEX.MA,
MKL_DRIVER_I2C_MOTOR_DC_DIR_INDEX.backward,
0
))
basic.pause(2000)
MakerEdu_vn.Set_MKL_I2C_MotorDriver_Stop(MKL_DRIVER_I2C_MOTOR_INDEX.MKL_DRIVER_I2C_MOTOR_INDEX_1, MKL_DRIVER_I2C_MOTOR_DC_INDEX.MA, MKL_MOTOR_STOP_MODE.brake)
