"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chai_1 = require("chai");
const chaiHttp = require("chai-http");
// import { server } from "../index";
const server = 'http://localhost:4000';
chai.should();
chai.use(chaiHttp);
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTZlZjhkNGRlMTQ5OWU0ZjkyOTQ5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzMwMDc0MSwiZXhwIjoxNjY0MTY0NzQxfQ.0cgB96nSSeNp6h-ZHPlhGDlzd0iACmN6qxytrtO1Jp8";
describe("GET Api", () => {
    /*** Test GET Route */
    const id = "62fc82c53e05ed50484d497c";
    describe("GET /category/getcategory", () => {
        it("It should GET All Category data", (done) => {
            chai.request(server)
                .get(`/products/find/${id}`)
                .end((err, response) => {
                (0, chai_1.expect)(response).have.status(200);
                (0, chai_1.expect)(response.body).to.be.a("object");
                (0, chai_1.expect)(response.body.categories).to.have.length(2);
                (0, chai_1.expect)(response.body).to.have.property("_id");
                //   expect(response.body.result[0]).to.have.property("category_name");
                done();
            });
        });
    });
});
/**TEST THE GET (by id) route */
describe("GET/Api", () => {
    it("It should GET all the task", (done) => {
        chai.request(server)
            .get("/products/")
            .end((err, response) => {
            (0, chai_1.expect)(response).have.status(200);
            (0, chai_1.expect)(response.body).to.be.a("array");
            done();
        });
    });
});
/**Test the POST route */
describe('POST/Api', () => {
    it("it should post a new task", (done) => {
        chai.request(server)
            .post('/products/')
            .set("token", "Bearer " + token)
            .send({
            title: "pooja",
            desc: "JACKET",
            img: "https://assets.ajio.com/medias/sys_master/root/20220906/fmWa/6316a327f997dd1f8de43b32/fort_collins_yellow_puffer_jacket_with_detachable_hood.jpg",
            categories: ["t-shirt", "jeans"],
            size: "XL",
            color: "BLACK",
            price: 5770,
        })
            .end(function (err, res) {
            (0, chai_1.expect)(res).to.have.status(200);
            done();
        });
    });
});
// /**Test the delete route */
describe('DELETE/Api', () => {
    const id = "632db15b9f80e931aebeff80";
    it("it should post a new task", (done) => {
        chai.request(server)
            .delete(`/products/${id}`)
            .set("token", "Bearer " + token)
            .send({
            title: "pooja",
            desc: "JACKET",
            img: "https://assets.ajio.com/medias/sys_master/root/20220906/fmWa/6316a327f997dd1f8de43b32/fort_collins_yellow_puffer_jacket_with_detachable_hood.jpg",
            categories: ["t-shirt", "jeans"],
            size: "XL",
            color: "BLACK",
            price: 5770,
        })
            .end(function (err, res) {
            (0, chai_1.expect)(res).to.have.status(200);
            done();
        });
    });
});
// /**Test the put route */
describe('PUT/Api', () => {
    const id = "632d9c3defbb5e2ac74302ac";
    it("it should post a new task", (done) => {
        chai.request(server)
            .put(`/products/${id}`)
            .set("token", "Bearer " + token)
            .send({
            title: "karun",
            desc: "JACKET",
            img: "https://assets.ajio.com/medias/sys_master/root/20220906/fmWa/6316a327f997dd1f8de43b32/fort_collins_yellow_puffer_jacket_with_detachable_hood.jpg",
            categories: ["t-shirt", "jeans"],
            size: "XL",
            color: "GREEN",
            price: 7770,
        })
            .end(function (err, res) {
            (0, chai_1.expect)(res).to.have.status(200);
            done();
        });
    });
});
//# sourceMappingURL=user.js.map