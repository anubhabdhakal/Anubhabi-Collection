from django.core.validators import MaxValueValidator
from django.db import models

# Create your models here.


class Product(models.Model):

    class Meta:
        ordering = ["-id"]

    name = models.CharField(max_length=70)
    price = models.IntegerField()
    description = models.CharField(max_length=300)
    rating = models.IntegerField(validators=[MaxValueValidator(5)])
    quantity = models.IntegerField()
    is_available = models.BooleanField()
    category = models.ForeignKey(
        "ProductCategory", on_delete=models.CASCADE, default=None
    )
    available_sizes = models.ManyToManyField("Size")
    photos = models.ManyToManyField("ProductImage")

    def __str__(self):
        return self.name


class ProductCategory(models.Model):

    class Meta:
        ordering = ["-id"]

    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    photo_url = models.ImageField(upload_to="product/category")

    @property
    def numbers_of_product(self):
        instances = Product.objects.filter(category=self.id)
        count = 0
        for ins in instances:
            count = count + 1

        return count

    def __str__(self):
        return self.name


class Size(models.Model):
    SIZE_CHOICES = [
        ("XS", "XS"),
        ("XL", "XL"),
        ("S", "S"),
        ("L", "L"),
        ("M", "M"),
    ]
    name = models.CharField(choices=SIZE_CHOICES, max_length=3)

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    image = models.ImageField(upload_to="product/")

    def __str__(self):
        return self.image.path
