from django.db import models
from django.contrib.auth import get_user_model
from products.models import Product

User = get_user_model()

# Create your models here.


class Cart (models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product, default=None)

    def __str__(self):
        return self.user.username
