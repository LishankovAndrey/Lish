using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        DateTime now = DateTime.Now;

        Dictionary<string, int> timeDict = new Dictionary<string, int>
        {
            { "Year", now.Year },
            { "Month", now.Month },
            { "Day", now.Day },
            { "Hour", now.Hour },
            { "Minute", now.Minute },
            { "Second", now.Second }
        };

        foreach (var pair in timeDict)
        {
            Console.WriteLine($"{pair.Key}: {pair.Value}");
        }
    }
}
