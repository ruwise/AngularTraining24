describe("Hello world", function() {
 
    // one test case is here
     it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world");
      });
      
      
      it("says boy", function() {
        expect(helloWorld()).toEqual("HelloWold1");
      });

      it("adding numbers", function() {
        expect(add(12, 12)).toEqual(24);
      });

      it("adding numbers wrong result", function() {
        expect(add(12, 12)).toEqual(20);
      });

      it("sub numbers", function() {
        expect(sub(12, 12)).toEqual(0);
      });

      it("mul numbers", function() {
        expect(mul(10, 10)).toEqual(100);
      });

      it("div numbers", function() {
        expect(div(12, 6)).toEqual(2);
      });

    });