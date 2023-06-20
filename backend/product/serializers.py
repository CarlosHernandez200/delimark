from rest_framework import serializers
<<<<<<< HEAD
from django_filters import rest_framework as filters
=======
from django_filters import rest_framework as filter
>>>>>>> f5b5c6fb6215a321e751ddca2f803f10d462cabc
from product.models import Product, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class productFilter(filter.Filter):
    class Meta:
        model = Product
        fields = {
            'category': ['exact'],
        }

class productFilter(filters.Filter):
    class Meta:
        model = Product
        fields = {
            'category': ['exact'],
        }


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        filter_class = productFilter
