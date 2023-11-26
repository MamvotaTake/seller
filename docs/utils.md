### `on` function
Adds an event listener to the specified object.

### Syntax

```typescript
on<T extends Window | Document | HTMLElement | EventTarget>(
obj: T | null,
...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void
```
### Parameters
`obj: T | null:` The object to add the event listener to.
`args: Parameters<T['addEventListener']> | [string, Function | null, ...any]:` The arguments to pass to the event listener.

### `on` function
Remove an event listener from the specified object.

### Syntax

```typescript
on<T extends Window | Document | HTMLElement | EventTarget>(
obj: T | null,
...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void
```

### Parameters
`obj: T | null:` The object to add the event listener to.
`args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]:` The arguments to pass to the event listener.


