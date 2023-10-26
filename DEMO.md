# React is Easy

You want data:

```
<p>{data}</p>
```



Add data fetching:

```typescript
let data = "Loading ...";
fetchData().then((d) => {
  console.log(d);
  data = d;
});
```

Oh my ... complexity:

```typescript
const [data, setData] = useState("Loading ...");

useEffect(() => {
  fetchData().then((data) => {
    setData(data);
  });
});
```

-> same in Angular or Vue ... same with RxJS ...

Secretly switch import of `PageLayout`in `page.tsx` and implementation in `fetchData.ts`...

What if I told you everything you know to be true is wrong?

```typescript
  const data = await fetchData();
```

-> async component



- Show `fetchData`
- Show that JS for rendering is not even sent to the client (difference to traditional SSR).



# Form Demo

Extend `HelloWorld.tsx`

```
<FormDemo initalMessage={data.text} />
```

- Show Interactivity
- Show rendering code is loaded in the client - add log statement



# List Demo

Extend `FormDemo.tsx`

```ts
  async function handleSubmit() {
    await myAction(message);
  }
```

and

```
 <form action={handleSubmit} 
```



- Show DB



Extend `HelloWorld.tsx`

```
  <ListDemo />
```



Refreshing the UI:

```
import { useRouter } from "next/navigation";
let router = useRouter();
router.refresh();
```

Better:

In `action.ts`

```
 revalidatePath("/");
```



# Chart Demo
