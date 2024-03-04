import RPi.GPIO as GPIO
import time

def ring_bell(pin_number,time):
    if not GPIO.BCM.valid_pin(pin_number):
        raise RuntimeError("Invalid BCM pin number: {}".format(pin_number))

    GPIO.setup(pin_number, GPIO.OUT)
    GPIO.output(pin_number, GPIO.HIGH)
    time.sleep(time)
    GPIO.output(pin_number, GPIO.LOW)

    GPIO.cleanup()
    GPIO.setmode(GPIO.BCM) 
    GPIO.output(23, GPIO.HIGH)

def open_door(pin_number, time):
    if not GPIO.BCM.valid_pin(pin_number):
        raise RuntimeError("Invalid BCM pin number: {}".format(pin_number))

    GPIO.setup(pin_number, GPIO.OUT)
    GPIO.output(pin_number, GPIO.HIGH)
    time.sleep(time)
    GPIO.output(pin_number, GPIO.LOW)

    GPIO.cleanup()
    GPIO.setmode(GPIO.BCM) 
    GPIO.output(23, GPIO.HIGH)