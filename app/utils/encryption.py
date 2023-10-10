from cryptography.fernet import Fernet
import os

key = os.environ.get('ENCRYPTION_KEY').encode()
cipher_suite = Fernet(key)

def encrypt(data):
    return cipher_suite.encrypt(data.encode()).decode()

def decrypt(data):
    return cipher_suite.decrypt(data.encode()).decode()
