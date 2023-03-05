const { app, server } = require('../server')
const request = require('supertest')

test("test request with valid payload", async function() {
    jest.setTimeout(10000)
    const testPayload = {
        name: "test.name",
        email: "test.email@example.com",
        interest: "test.interests"
    }

    const response = await request(app)
        .post('/update-profile')
        .send(testPayload)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("info")
    expect(response.body.info).toBe("user profile data updated successfully")

    server.close()
})

test("test request with invalid payload", async function() {
    jest.setTimeout(10000)
    const testPayload = {}

    const response = await request(app)
        .post('/update-profile')
        .send(testPayload)

    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("empty payload. Couldn't update user profile data")

    server.close()
})