const { isInvalidEmail, isEmptyPayload } = require('../validator')

test('valid email', function() {
    const testPayload = {
        name: "test.name",
        email: "test.email@example.com",
        interest: "test.interests"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false)
})

test('valid email', function() {
    const testPayload = {
        name: "test.name",
        email: "test.email",
        interest: "test.interests"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(true)
})

test('empty payload', function() {
    testPayload = {}
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(true)
})

test('not empty payload', function() {
    testPayload = {
        name: "test.name",
        email: "test.email",
        interest: "test.interests"
    }
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(false)
})
