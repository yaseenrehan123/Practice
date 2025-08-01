type MeleeClass = {};
type RangeClass = {};
type MageClass = {};
type HeroClass<T> = {
    value
    : T extends MeleeClass ? MeleeClass
    : T extends RangeClass ? RangeClass
    : T extends MageClass ? MageClass
    : never;
};
const hero1:HeroClass<MeleeClass> = {value:'ads'};
