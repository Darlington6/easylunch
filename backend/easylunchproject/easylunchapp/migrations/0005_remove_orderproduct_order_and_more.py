# Generated by Django 5.1.3 on 2024-11-23 12:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('easylunchapp', '0004_remove_order_price_remove_order_product_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderproduct',
            name='order',
        ),
        migrations.RemoveField(
            model_name='orderproduct',
            name='product',
        ),
        migrations.DeleteModel(
            name='Order',
        ),
        migrations.DeleteModel(
            name='OrderProduct',
        ),
    ]
