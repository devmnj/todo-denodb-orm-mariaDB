import { Model, Database, MySQLConnector, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

const connector = new MySQLConnector({
  database: 'todo_manager',
  host: '127.0.0.1',
  username: 'root',
  password: '123',
  port: 4001, // optional
});

const db = new Database(connector)

// NOTE Models 
class Todo extends Model {
    static table = 'maria_todos';
    static fields = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        item: {
            type: DataTypes.STRING,
        }
        ,
        description: {
            type: DataTypes.STRING,
        }
    };
}
// NOTE Linking Model with DB
db.link([Todo])
await db.sync()

 export default Todo;