package main
import (
    "context"
    "fmt"
    "github.com/tencentyun/scf-go-lib/cloudfunction"
    "github.com/tencentyun/scf-go-lib/functioncontext"
)

type DefineEvent struct {
    // test event define
    Key1 string `json:"key1"`
    Key2 string `json:"key2"`
}
func hello(ctx context.Context, event DefineEvent) (string, error) {
    lc, _ := functioncontext.FromContext(ctx)
    fmt.Printf("ctx: %#v\n", lc) 
    fmt.Printf("namespace: %s\n", lc.Namespace)
    fmt.Printf("function name: %s\n", lc.FunctionName)
    return fmt.Sprintf("Hello!......."), nil 
}
func main() {
    

    // Make the handler available for Remote Procedure Call by Cloud Function
    cloudfunction.Start(hello)
}