# Generated by Django 5.1.3 on 2024-11-23 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('easylunchapp', '0013_remove_order_product_quantities_order_quantity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='quantity',
        ),
        migrations.AddField(
            model_name='order',
            name='product_quantities',
            field=models.JSONField(default=list),
        ),
    ]
