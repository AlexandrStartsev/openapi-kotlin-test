package edu.alex

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class TestApp {

    @Test
    fun test1() {

        val info = UserContactInfo.fromJson("""{"phone": "123-456-7890"}""")

        assertTrue { info is UserContactInfo }
        assertEquals("123-456-7890", info.phone)
    }

    @Test
    fun test2() {

        val alex = User.fromJson("""{"id": 1,"name": "Alex","dob": "12/04","race": "white"}""")

        assertEquals(Race.white, alex.race)
    }

    @Test
    fun test3() {

        val testList = listOf(Movie(title="Star Wars"), Movie(title="Lord of the rings"))
        val alex = User.fromJson("""{"id": 1,"name": "Alex","dob": "12/04","favoriteMovies": [{"title": "Star Wars"}, {"title": "Lord of the rings"}]}""")


        assertTrue { alex.favoriteMovies!!.containsAll(testList) }
    }
}