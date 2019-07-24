import { GraphQLScalarType } from 'graphql';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

export default {
    Object: new GraphQLScalarType({
        name: 'Object',
        description: 'Object',
        serialize: value => value,
        parseValue: value => value,
        parseLiteral: (ast: any) => {
            if (ast.kind !== Kind.OBJECT) {
                throw new GraphQLError(`Query error: Can only parse object but got a: ${ast.kind}`, [ast]);
            }

            let objectValue = ast.value;
            if (ast.fields) {
                objectValue = ast.fields.reduce((previous: any, field: any) => {
                    let fieldValue = field.value.value;
                    if (Array.isArray(field.value.values)) {
                        fieldValue = field.value.values.reduce((prev: any, next: any) => {
                            prev.push(next.value);
                            return prev;
                        }, []);
                    }

                    return Object.assign({}, previous, { [field.name.value]: fieldValue });
                }, {});
            }

            return objectValue;
        },
    }),
};
