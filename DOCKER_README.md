# Docker Compose 使用说明

本项目使用 Docker Compose 来同时管理前端和后端服务。

## 快速开始

### 1. 启动所有服务

在项目根目录执行：

```bash
docker compose up
```

或者以后台模式运行：

```bash
docker compose up -d
```

### 2. 访问应用

- **前端**: http://localhost:3000
- **后端 API**: http://localhost:8080

### 3. 停止服务

```bash
docker compose down
```

或者停止并删除卷（包括数据）：

```bash
docker compose down -v
```

## 服务说明

### 后端服务 (backend)

- **容器名**: `jo-enmedia-backend`
- **端口**: `8080`
- **技术栈**: Flask + Gunicorn
- **健康检查**: 每 30 秒检查一次

### 前端服务 (frontend)

- **容器名**: `jo-enmedia-frontend`
- **端口**: `3000` (映射到容器内的 80)
- **技术栈**: React + Nginx
- **依赖**: 依赖后端服务启动

## 环境变量配置

### 前端环境变量

在 `docker-compose.yml` 中可以配置：

- `REACT_APP_API_URL`: 后端 API 地址（默认: `http://localhost:8080`）

### 后端环境变量

在 `docker-compose.yml` 中可以配置：

- `PORT`: 服务端口（默认: `8080`）
- `ORIGIN`: CORS 允许的来源，多个用逗号分隔
  - 默认: `http://localhost:3000,http://frontend:80,http://localhost:80`
- `MAIL_USERNAME`: 邮件服务用户名
- `MAIL_PASSWORD`: 邮件服务密码

## 常用命令

### 查看运行状态

```bash
docker compose ps
```

### 查看日志

查看所有服务日志：
```bash
docker compose logs
```

查看特定服务日志：
```bash
docker compose logs backend
docker compose logs frontend
```

实时查看日志：
```bash
docker compose logs -f
```

### 重新构建镜像

```bash
docker compose build
```

强制重新构建（不使用缓存）：
```bash
docker compose build --no-cache
```

### 重启服务

```bash
docker compose restart
```

或者重启特定服务：
```bash
docker compose restart backend
docker compose restart frontend
```

### 进入容器

```bash
# 进入后端容器
docker compose exec backend sh

# 进入前端容器
docker compose exec frontend sh
```

## 开发模式

如果需要开发模式（代码热重载），可以修改 `docker-compose.yml` 使用卷挂载：

```yaml
services:
  backend:
    volumes:
      - ./jo-enmedia-flask-app/server/src:/app/src
  frontend:
    volumes:
      - ./TK-Plus/tk-plus/src:/app/src
      - ./TK-Plus/tk-plus/public:/app/public
```

但注意：前端使用 Nginx 提供静态文件，开发模式需要特殊配置。

## 故障排查

### 端口被占用

如果端口 3000 或 8080 被占用，可以修改 `docker-compose.yml` 中的端口映射：

```yaml
ports:
  - "3001:80"  # 改为 3001 端口
```

### 查看容器日志

```bash
docker compose logs backend
docker compose logs frontend
```

### 检查容器状态

```bash
docker compose ps
```

### 重新构建并启动

```bash
docker compose down
docker compose build --no-cache
docker compose up -d
```

## 网络配置

服务之间通过 Docker 网络 `jo-enmedia-network` 通信。前端可以通过服务名 `backend` 访问后端，但浏览器中仍然需要使用 `http://localhost:8080`。

## 生产部署

生产环境建议：

1. 使用 `.env` 文件管理敏感环境变量
2. 配置 HTTPS/SSL 证书
3. 使用 Docker Secrets 管理敏感信息
4. 配置反向代理（如 Traefik 或 Nginx）
5. 设置资源限制（CPU、内存）
