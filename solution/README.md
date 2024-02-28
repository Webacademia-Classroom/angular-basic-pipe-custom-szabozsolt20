# Practices

## Setup the project
- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product page in the browser: http://localhost:4200/customers
- We will only work on the "customers" page.

## Tasks
- Open [customer.service.ts](src/app/page/customers/customers.component.ts)
- Import AsyncPipe, UpperCasePipe, and LowerCasePipe
- Change the value of the list variable to the return value of the CustomerService getAll method
- Open [customer.service.html](src/app/page/customer-editor/customer-editor.component.html)
- Apply the AsyncPipe in the @for loop to read data from an Observable
- Transform the customer's name to uppercase with a pipe
- Transform the customer's address to lowercase with a pipe

## Testing
- `npm test`f

## Further helps

### Import the necessary pipes
```typescript
imports: [
  AsyncPipe,
],
```

### Use the AsyncPipe in a @for loop
```html
@for (user of list | async; track $index) {
  <tr>...</tr>
}
```

### Apply a pipe to a displayed data
```html
<tr>
  <td>{{ user.name | uppercase }}</td>
</tr>
```
