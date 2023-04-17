const sinon = require("sinon");
const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../src/app");

const buscapeMock = require("./mocks/buscapeMock");
const { Product } = require("../src/models");
chai.use(chaiHttp);

describe("Testing Endpoint Products", () => {
  beforeEach(async () => {
    sinon.stub(Product, "findAll").resolves(buscapeMock);
    sinon.stub(Product, "bulkCreate").resolves(buscapeMock);
  });
  const { expect } = chai;
  let chaiHttpResponse;

  afterEach(() => sinon.restore());
  it("Return must be an error", async () => {
    chaiHttpResponse = await chai.request(app).post("/product");
    expect(chaiHttpResponse.status).to.be.eq(400);
  });

  it("Return must be equal to mock file", async () => {
    chaiHttpResponse = await chai.request(app).post("/product").send({
      site: "buscape",
      category: "tv",
      search: "",
    });
    const product = chaiHttpResponse.body;
    chaiHttpResponse = await chai.request(app).post("/product");
    expect(JSON.parse(product)).to.be.deep.equal(buscapeMock);
  });
});
