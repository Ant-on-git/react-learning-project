

type Mods = Record<string, boolean | string>
// Record: Это встроенный тип в TypeScript, который создает новый тип, представляющий объект с ключами и значениями определенного типа. В данном случае, ключи являются строками (string), а значения могут быть либо булевыми (boolean), либо строками (string).
// <string, boolean | string>: Это параметры для типа Record. Первый параметр указывает тип ключей (в этом случае, строки), а второй параметр указывает тип значений (в этом случае, булево или строку).


// функция для удобного комбинирования классов особенно если они навешиваются по какому то условию
export function classNames(cls: string, mods: Mods, additional: string[]): string {
    // cls - имя одного или нескольких классов в строку, 
    // mods - объект, у которого ключ = имя класса, значение (boolean) - добавлять класс или нет
    // additional - массив каких то дополнительных классов

    const classes = [
        cls, 
        ...additional, 
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ]

    return classes.join(' ');
}