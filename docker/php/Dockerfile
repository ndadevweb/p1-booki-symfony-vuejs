# Use PHP 8.3 FPM based on Alpine Linux 3.20.3
FROM php:8.3-fpm-alpine3.20 AS php8.3

# Enable debug mode for better logging
SHELL ["/bin/ash", "-o", "pipefail", "-c"]
RUN set -ex

# Set environment variables for Composer
ENV COMPOSER_ALLOW_SUPERUSER=1 \
    PATH="$PATH:/home/dockeruserphp/.composer/vendor/bin"

# Install system dependencies with detailed logging
RUN apk update && apk add --no-cache \
    shadow bash git unzip zip icu-dev postgresql-dev sqlite-dev libpng-dev libjpeg-turbo-dev \
    freetype-dev libwebp-dev oniguruma-dev libxml2-dev gmp-dev openssl-dev autoconf build-base linux-headers

# Configure and install GD with PNG and WebP support
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp && \
    docker-php-ext-install -j$(nproc) gd || \
    (echo "Failed to install gd extension." && exit 1)

# Install other PHP extensions
RUN docker-php-ext-install -j$(nproc) \
    intl pdo pdo_mysql pdo_pgsql pdo_sqlite mysqli mbstring xml gmp opcache || \
    (echo "Failed to install PHP extensions." && exit 1)

# Install Xdebug via PECL with detailed logging
RUN pecl install xdebug && docker-php-ext-enable xdebug

# Install Redis via PECL
RUN pecl install redis && docker-php-ext-enable redis

# Clean up temporary files to reduce image size
RUN apk del autoconf build-base && rm -rf /var/cache/apk/*

# Set up Composer with multistaging
FROM composer:2.6 AS composer2.6
FROM php8.3
COPY --from=composer2.6 /usr/bin/composer /usr/bin/composer

# Create non-root user
ARG HOST_UID=1000
ARG HOST_GID=1000
RUN echo "Creating group and user with specific UID/GID ${HOST_UID}:${HOST_GID}" && \
    groupadd -g $HOST_GID dockerusergroup && \
    useradd -m -u $HOST_UID -g dockerusergroup dockeruserphp && \
    mkdir -p /var/www && chown -R dockeruserphp:dockerusergroup /var/www

# Copy php.ini
COPY php.ini /usr/local/etc/php/php.ini

# Install Symfony CLI
RUN curl -sS https://get.symfony.com/cli/installer | bash && \
    mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Switch to non-root user
USER dockeruserphp
WORKDIR /app

CMD ["php-fpm"]
