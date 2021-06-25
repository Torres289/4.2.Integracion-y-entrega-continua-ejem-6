package com.example;

import org.junit.jupiter.api.Test;
// import es.codeurjc.rest.items.Item;

import es.codeurjc.test.complex.Complex;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Unit test for simple App.
 */
class AppTest {
    /**
     * Rigorous Test.
     */
    @Test
    void testApp() {
        Complex zero = new Complex(0, 0);
        assertEquals(new Complex(1, 1), zero.add(new Complex(1, 1)));
    }
}
