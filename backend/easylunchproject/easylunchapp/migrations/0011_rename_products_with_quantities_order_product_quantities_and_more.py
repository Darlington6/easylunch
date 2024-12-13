# Generated by Django 5.1.3 on 2024-11-23 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('easylunchapp', '0010_remove_order_products_json_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='products_with_quantities',
            new_name='product_quantities',
        ),
        migrations.AddField(
            model_name='order',
            name='products',
            field=models.ManyToManyField(to='easylunchapp.product'),
        ),
    ]