FROM node:20-bookworm-slim

ENV BINARIES_INSTALL_PATH=/usr/local/bin

RUN set -eux; \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    ca-certificates=20230311 runit=2.1.2-54 && \
    useradd --home-dir /home/hop --create-home --shell /bin/bash --user-group hop && \
    apt-get -y autoremove && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY docker/run-as-user.sh "${BINARIES_INSTALL_PATH}"

WORKDIR /app

ENTRYPOINT ["run-as-user.sh"]