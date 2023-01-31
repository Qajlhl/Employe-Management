"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path = require("path");
const serveStatic = require("serve-static");
const app_module_1 = require("./app.module");
const session = require("express-session");
const request_interceptor_1 = require("./interceptor/request.interceptor");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('电商后台接口')
        .setDescription('接口包含移动端以及pc端所有可用接口')
        .setVersion('1.0.0')
        .addBearerAuth()
        .setBasePath('http://localhost:3000')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/api', app, document);
    app.use(session({ secret: 'shop-backend', cookie: { maxAge: 60000 } }));
    app.use('/public', serveStatic(path.join(__dirname, '../public'), {
        maxAge: '99d',
        extensions: ['jpg', 'jpeg', 'png', 'gif'],
    }));
    app.useGlobalInterceptors(new request_interceptor_1.RequestInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map