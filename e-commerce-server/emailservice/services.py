from random import randint
from django.conf import settings
from cryptography.fernet import Fernet


def getRandomCode(digits: int) -> int:
    lower_bound = 1
    higher_bound = 9
    if digits == 1:
        return randint(lower_bound, higher_bound)

    return randint(
        10 ** (digits - 1), (10 ** (digits - 1) * 10 - 1)
    )  # if 3 digits then lower = 100 and upper = 100 * 10 -1 = 999


def createEncryptedKey(value: int) -> str | None:
    key = Fernet(settings.SECRET_KEY)
    encrypted_key = key.encrypt(bytes(str(value), "utf-8"))
    return encrypted_key
