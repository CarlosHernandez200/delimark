from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from product.models import Product, Category
from product.serializers import ProductSerializer, CategorySerializer


# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
<<<<<<< HEAD
    # permission_classes = (IsAuthenticated,)
    queryset = Product.objects.all()

=======
>>>>>>> f5b5c6fb6215a321e751ddca2f803f10d462cabc
    def get_queryset(self):
        queryset = super().get_queryset()
        params = self.request.query_params.get("category")
        if params:
            queryset = queryset.filter(category__name=params)
        return queryset
<<<<<<< HEAD
        # category = self.request.query_params("Category")
        # if category:
        #     queryset = queryset.filter(category=category)
        # return queryset
=======
>>>>>>> f5b5c6fb6215a321e751ddca2f803f10d462cabc


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer