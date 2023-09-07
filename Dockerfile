FROM php:7.4-apache
RUN apt-get update
RUN docker-php-ext-install pdo pdo_mysql
#SOAP
#RUN apt-get install -y libxml2-dev
#RUN docker-php-ext-install soap

#Xdebug
RUN pecl install xdebug-3.1.2
ADD xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini
