# Ng4Materialize

You can import the default theme and override settings to get rid of the "Mat-Core missing issue" or 
better yet, turn off MATERIAL_SANITY_CHECKS as Core gets loaded fine and warning wont show up in prod

Option A
```theme.scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

Option B (better)
```
@NgModule({
  ...
  providers: [{provide: MATERIAL_SANITY_CHECKS, useValue: false}],
  ...
})
export class AppModule {
}
```
