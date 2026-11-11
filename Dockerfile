FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    XAI_DATA_DIR=/app/data \
    XAI_ASSET_ROOT=/app/assets

WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt \
    && useradd --create-home --uid 10001 mcp \
    && mkdir data assets \
    && chown mcp:mcp data assets

USER mcp
CMD ["8xai-design-mcp"]
