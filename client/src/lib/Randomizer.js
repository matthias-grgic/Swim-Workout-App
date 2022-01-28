export default function Randomizer(list) {
    const newWOD = list
        .map((value) => ({ value, sort: Math.random() })) //put each element in the array in an object, and give it a random sort key
        .sort((a, b) => a.sort - b.sort) //sort using the random key
        .map(({ value }) => value) //unmap to get the original objects
    return newWOD
}
