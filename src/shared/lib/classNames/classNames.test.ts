import { classNames } from "./classNames";

describe('classNames', () => {
    test('with only first param', () => {
        expect( classNames('someClass') ).toBe('someClass');
    });

    test('with additional params', () => {
        const expected = "firstClass addedClass secondClass";
        expect(classNames("firstClass", { addedClass: true, notAddedClass: false }, ["secondClass"])).toBe(expected);
    });
});
