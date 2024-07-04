from django.contrib import admin

from .models import Product, ProductCategory, ProductImage, Size


# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "quantity")


@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)


# admin.site.register(Size)
@admin.register(Size)
class RegisterAdmin(admin.ModelAdmin):
    list_display = ("name",)
