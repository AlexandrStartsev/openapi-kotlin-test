package edu.alex

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class TestApp {

    @Test
    fun test1() {

        val info = UserContactInfo.parse("""{"phone": "123-456-7890"}""")

        assertTrue { info is UserContactInfo }
        assertEquals("123-456-7890", info.phone)
    }

    @Test
    fun test2() {

        val alex = User.parse("""{"id": 1, "name": "Alex", "dob": "12/04", "race": "white"}""")

        assertEquals(Race.white, alex.race)
        assertEquals(null, alex.skippableArray)
        assertEquals(listOf(), alex.requiredSkippableArray)
        assertTrue { alex.requiredSkippableArray is List }
    }

    @Test
    fun test3() {

        val testList = listOf(Movie(title="Star Wars"), Movie(title="Lord of the rings"))
        val alex = User.parse("""{"id": 1, "junk": 123, "name": "Alex", "dob": "12/04", "favoriteMovies": [{"title": "Star Wars"}, {"title": "Lord of the rings"}]}""")


        assertTrue { alex.favoriteMovies!!.containsAll(testList) }
    }

    @Test
    fun test4() {
        /*
         TODO: doesn't work for now - outpouts nulls and empty arrays

        val json = """{"id":1,"name":"Alex","dob":"12/04","favoriteMovies":[{"title":"Star Wars"},{"title":"Lord of the rings"}]}"""
        val user = UserA(id = 1, name = "Alex", dob = "12/04", favoriteMovies = listOf(Movie(title="Star Wars"), Movie(title="Lord of the rings")), requiredSkippableArray = listOf())

        assertEquals( json, user.stringify() )*/
    }
}