import os
from datetime import datetime

from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'Categories'
        db_table = 'Categories'


def generate_filename(instance, filename):
    ext = filename.split('.')[-1]
    timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
    filename = f"{timestamp}.{ext}"
    return os.path.join('static/image', filename)


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField(max_length=250, blank=True, null=True)
    image = models.ImageField(upload_to=generate_filename)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'product'
        verbose_name_plural = 'products'
        db_table = 'products'