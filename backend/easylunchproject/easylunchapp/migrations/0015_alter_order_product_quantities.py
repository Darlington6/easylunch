# Generated by Django 5.1.3 on 2024-11-23 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('easylunchapp', '0014_remove_order_quantity_order_product_quantities'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='product_quantities',
            field=models.JSONField(default=dict),
        ),
    ]
