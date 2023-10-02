import  request  from "supertest";
import { app, server } from "../app.js";
import db from "../database/database.js"
import productModel from "../models/productModel.js";

describe("test CRUD products", () => {

    describe("GET /products", () => {

        let response

        beforeEach(async() => {
            response = await request(app).get('/products').send()
        })

        test('should return a response with status 200 and type json', async() => {
			expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        
        test("should return all products", async () => {
            expect(response.body).toBeInstanceOf(Array)
        })
    })

    describe('POST /products',() =>{ 

        const newProduct = {
            title: "test",
            writer: "test",
            product_description: "test",
        }

        const wrongProduct = {
            wrong_field:'test'
        }

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/products').send(newProduct)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message product created successfully', async () =>{
            const response = await request(app).post('/products').send(newproduct)
            expect(response.body.message).toContain("The product has been created successfully!")
        })

        test('should return a message insertion error If post wrong product ', async () =>{
            const response = await request(app).post('/products').send(wrongProduct)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'title' doesn't have a default value")
        })

        //código para no modificar la base de datos con los test

        afterAll(async () =>{
            await productModel.destroy({where: {title: "test"}})
        })
 

    })


    afterAll(() =>{
        server.close()
        db.close()
    })
})
